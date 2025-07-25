# Deployment Guide

This guide explains how to set up automatic deployment of the Angular application to leonardomanrique.com using GitHub Actions.

## Prerequisites

1. Your Angular application is hosted on GitHub
2. You have SSH access to your server
3. Nginx is configured to serve static files from `/home/lux/docker-containers-config/nginx/sites/leonardomanrique.com`
4. The deployment user has proper permissions to:
   - Write to `/home/lux/docker-containers-config/nginx/sites/leonardomanrique`
   - Execute `systemctl reload nginx` (or nginx reload is handled separately)

## GitHub Secrets Setup

You need to configure the following secrets in your GitHub repository:

1. Go to your GitHub repository
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Add the following repository secrets:

### Required Secrets

- `HOST`: Your server's IP address or domain name
- `USERNAME`: SSH username for your server
- `SSH_KEY`: Your private SSH key (the entire key content, including `-----BEGIN OPENSSH PRIVATE KEY-----` and `-----END OPENSSH PRIVATE KEY-----`)
- `PORT`: SSH port (usually 22)

### How to Generate SSH Key (if needed)

```bash
# Generate a new SSH key pair
ssh-keygen -t ed25519 -C "github-actions@leonardomanrique.com"

# Copy the public key to your server
ssh-copy-id -i ~/.ssh/id_ed25519.pub username@your-server

# Display the private key to copy to GitHub Secrets
cat ~/.ssh/id_ed25519
```

### Setting up Deployment User Permissions

To avoid permission errors, set up the deployment user with proper permissions:

```bash
# SSH into your server
ssh username@your-server

# Add the deployment user to the www-data group
sudo usermod -a -G www-data $USER

# Create the deployment directory if it doesn't exist
sudo mkdir -p /home/lux/docker-containers-config/nginx/sites/leonardomanrique

# Give the deployment user ownership of the deployment directory
sudo chown -R $USER:www-data /home/lux/docker-containers-config/nginx/sites/leonardomanrique

# Set proper permissions
sudo chmod -R 755 /home/lux/docker-containers-config/nginx/sites/leonardomanrique

# Configure sudoers to allow nginx reload without password
echo "$USER ALL=(ALL) NOPASSWD: /bin/systemctl reload nginx" | sudo tee -a /etc/sudoers.d/nginx-reload

# Log out and back in for group changes to take effect
exit
ssh username@your-server
```

### Alternative: Use a Dedicated Deployment User

For better security, create a dedicated deployment user:

```bash
# Create a new user for deployments
sudo useradd -m -s /bin/bash deploy

# Add to www-data group
sudo usermod -a -G www-data deploy

# Set up SSH key for the deploy user
sudo mkdir -p /home/deploy/.ssh
sudo cp ~/.ssh/authorized_keys /home/deploy/.ssh/
sudo chown -R deploy:deploy /home/deploy/.ssh
sudo chmod 700 /home/deploy/.ssh
sudo chmod 600 /home/deploy/.ssh/authorized_keys

# Give deploy user access to the deployment directory
sudo chown -R deploy:www-data /home/lux/docker-containers-config/nginx/sites/leonardomanrique
sudo chmod -R 755 /home/lux/docker-containers-config/nginx/sites/leonardomanrique

# Allow nginx reload
echo "deploy ALL=(ALL) NOPASSWD: /bin/systemctl reload nginx" | sudo tee -a /etc/sudoers.d/nginx-reload
```

## Deployment Process

The GitHub Actions workflow will:

1. **Trigger**: Run on every push to `main` or `master` branch
2. **Build**: Install dependencies, run tests, and build the production version
3. **Deploy**: 
   - Create a backup of the current deployment
   - Copy the new build files to `/home/lux/docker-containers-config/nginx/sites/leonardomanrique.com`
   - Set proper permissions
   - Reload nginx

## Nginx Configuration

Make sure your nginx configuration includes a server block for leonardomanrique.com that points to the deployment directory:

```nginx
server {
    listen 80;
    server_name leonardomanrique.com www.leonardomanrique.com;
    
    root /home/lux/docker-containers-config/nginx/sites/leonardomanrique.com;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

## Manual Deployment

If you need to deploy manually:

```bash
# Build the application locally
npm run build -- --configuration=production

# Copy files to server
scp -r dist/leonardomanrique-angular/* username@your-server:/home/lux/docker-containers-config/nginx/sites/leonardomanrique.com/

# SSH into server and set permissions
ssh username@your-server
sudo chown -R www-data:www-data /home/lux/docker-containers-config/nginx/sites/leonardomanrique.com
sudo chmod -R 755 /home/lux/docker-containers-config/nginx/sites/leonardomanrique.com
sudo systemctl reload nginx
```

## Troubleshooting

### Common Issues

1. **Permission Denied**: Make sure the SSH key has the correct permissions and the user has sudo access
2. **Build Failures**: Check that all dependencies are properly installed and tests pass
3. **Nginx Issues**: Verify nginx configuration and ensure the service is running

### Logs

- GitHub Actions logs are available in the **Actions** tab of your repository
- Server logs can be checked with: `sudo journalctl -u nginx`

## Security Notes

- Keep your SSH private key secure and never commit it to the repository
- Consider using a dedicated deployment user with limited permissions
- Regularly rotate SSH keys
- Monitor deployment logs for any security issues 
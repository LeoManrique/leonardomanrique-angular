export interface AboutData {
  title: string;
  subtitle: string;
  description: string;
  resume: string;
}

export interface QualificationItem {
  title: string;
  subtitle: string;
  date: string;
  position: 'left' | 'right';
}

export interface QualificationData {
  work: QualificationItem[];
  education: QualificationItem[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface HomeData {
  title: string;
  subtitle: string;
  description: string;
  socialLinks: SocialLink[];
  profileImage: string;
}

export interface LoginReq {
  email: string;
  password: string;
}

export interface SignUpReq extends LoginReq {
  position: string;
  memberName: string;
}

export interface NavItem {
  itemValue: string;
  handler: () => void;
}

export interface Post {
  id: number;
  memberName: string;
  title: string;
  content: string;
  createdAt: string;
  modifiedAt: string;
  keywords: string[];
  commentCount: number;
}

export interface Category {
  id: number;
  categoryName: string;
}

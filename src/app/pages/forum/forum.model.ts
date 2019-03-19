export interface ForumModel {
  id: any;
  imgPath: string;
  title: string;
}


export interface ForumTalk {
  id: any;
  title: string;
  votes: number;
  replies: number;
  views: number;
  tags: string[];
}

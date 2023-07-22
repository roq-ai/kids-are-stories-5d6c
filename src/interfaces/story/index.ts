import { BookmarkInterface } from 'interfaces/bookmark';
import { ReviewInterface } from 'interfaces/review';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface StoryInterface {
  id?: string;
  title: string;
  content: string;
  genre: string;
  organization_id?: string;
  created_at?: any;
  updated_at?: any;
  bookmark?: BookmarkInterface[];
  review?: ReviewInterface[];
  organization?: OrganizationInterface;
  _count?: {
    bookmark?: number;
    review?: number;
  };
}

export interface StoryGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  content?: string;
  genre?: string;
  organization_id?: string;
}

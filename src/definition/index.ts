interface LaunchSite {
  site_name_long: string;
}
interface Links {
  video_link: string;
  article_link: string;
}
interface Rocket {
  rocket_name: string;
  rocket_type: string;
}

export interface PastData {
  id: string;
  mission_name: string;
  launch_date_local: string;
  launch_site: LaunchSite;
  links: Links;
  rocket: Rocket;
  launch_success: boolean;
  details: string;
}

export interface NextData {
  id: string;
  launch_date_local: string;
  launch_site: LaunchSite;
  launch_success: boolean;
  links: Links;
  rocket: Rocket;
  details: string;
  mission_name: string;
}

export interface LaunchesPastData {
  data: { launchesPast?: PastData[] };
}

export interface LaunchesNextData {
  data: { launchNext?: NextData };
}

export interface CellType {
  row: PastData;
}

export enum ListType {
  Past,
  NEXT,
}

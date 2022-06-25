import { URL } from "./config";

export enum QueryType {
  PAST,
  NEXT,
}

const QUERY_PAST = `
    query {
        launchesPast(limit:10) {
            id
            mission_name
            launch_date_local
            launch_site {
                site_name_long
            }
            ships {
                name
                home_port
                image
            }
            links {
                article_link
                video_link
            }
            rocket {
                rocket_name
                rocket_type
            }
            launch_success
            details
        }
    }
`;

const QUERY_NEXT = `
    query {
            launchNext {
                launch_date_local
                id
                launch_site {
                site_name_long
                }
                launch_success
                links {
                article_link
                video_link
                }
                rocket {
                rocket_name
                rocket_type
                }
                details
                mission_name
            }
    }

`;

export const queryData = (queryType: QueryType): Promise<Response> => {
  return fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: queryType === QueryType.PAST ? QUERY_PAST : QUERY_NEXT,
    }),
  });
};

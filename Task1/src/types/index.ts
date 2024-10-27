export interface Information {
    driver_uuid: number;
    position: number;
    first_name: string;
    last_name: string;
    driver_country_code: string;
    season_team_name: string;
    season_points: number;
}

export type InformationWithName = Information & { name: string };
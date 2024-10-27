import { ColumnDef } from "@tanstack/react-table";
import { Information } from "../../types";

export const columns: ColumnDef<Information>[] = [
    {
        accessorKey: 'first_name',
        header: 'FIRST NAME'
    },
    {
        accessorKey: 'last_name',
        header: 'LAST NAME'
    },
    {
        accessorKey: 'driver_country_code',
        header: 'NATIONALITY'
    },
    {
        accessorKey: 'season_team_name',
        header: 'TEAM'
    },
    {
        accessorKey: 'season_points',
        header: 'PTS'
    }
]
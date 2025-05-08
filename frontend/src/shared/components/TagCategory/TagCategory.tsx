import { Chip } from "@mui/material";

interface TagCategoryProps {
    description: string,
    color: string
}

const TagCategory = ({ description, color }: TagCategoryProps) => {

    return <Chip label={description} sx={{
        background: `${color}`,
        color: "#fff"
    }} />

}

export default TagCategory 
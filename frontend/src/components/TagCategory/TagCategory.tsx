import { Chip } from "@mui/material";

interface TagCategoryProps {
    description: string,
    color: string
}

const TagCategory = (props: TagCategoryProps) => {

    const { description, color } = props;

    return <Chip label={description} sx={{
        background: `${color}`,
        color: "#fff"
    }} />

}

export default TagCategory 
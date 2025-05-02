import { Container } from "@mui/material";
import Title from "../layouts/Ttitle/Title";
import AddTaskButton from "../components/AddTaskButton/AddTaskButton";

const Home = () => {
    return (
        <Container maxWidth="sm">
            <div>
                <div>
                    <Title>Mis Tareas</Title>
                </div>
                <div>
                    <AddTaskButton></AddTaskButton>                    
                </div>
            </div>

        </Container>
    )
}

export default Home;
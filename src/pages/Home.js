import { useEffect } from "react";
import { useWorkoutsContext } from '../hooks/useWorkoutsContext';
import { useAuthContext } from '../hooks/useAuthContext';
import { fetch_URL } from "../App";


//components//
import DetailsWorkout from '../components/DetailsWorkout';
import WorkoutForm from "../components/WorkoutForm";
import Footer from "../components/Footer";

const Home = () => {

    const {workouts, dispatch} = useWorkoutsContext()
    const { user } = useAuthContext()

    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch(`${fetch_URL}/api/workouts`, {
                headers: {
                    'Authorization': `Bearer ${user.token}` 
                }
            } )
            const json = await response.json()

            if(response.ok) {
                dispatch({type: 'SET_WORKOUTS', payload: json})
            }
        }
        if(user) {
            fetchWorkouts()
        }  
    }, [dispatch, user])
    return (
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map((workout) => (
                    <DetailsWorkout 
                        key={workout._id}
                        workout={workout}
                    />
                ))}
            </div>
            <WorkoutForm />
            <Footer />
        </div>
        
       
    )
}

export default Home;
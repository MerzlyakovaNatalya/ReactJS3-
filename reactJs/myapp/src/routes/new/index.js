import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getRandomAnimals } from "../../store/new/action";
import {Error} from "../../components/Error";
import {Loader} from "../../components/Loader";
import {Figure} from "../../components/figure/Figure";
import {Button} from "@mui/material";
import { getError, getTodos, getLoading } from "../../store/new/selectors";

export const Animals = () => {
    const data = useSelector(getTodos);
    const isError = useSelector(getError);
    const isLoading = useSelector(getLoading);
    const dispatch = useDispatch();

    const getData = () => {
       dispatch(getRandomAnimals)
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            <h1>Homework</h1>
            {
                !isError &&
                <Button onClick={getData} disabled={isLoading} >reload</Button>
            }

            {isError && (
                <Error
                  reload={getData}
                  />
            )}
            {isLoading && <Loader />}

            {!isLoading && data && <Figure {...data}/>}
        </div>
    )
}
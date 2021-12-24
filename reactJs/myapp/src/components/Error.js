import {Button} from "@mui/material";

export const Error = ({ reload }) => (
<div> 
    <p>Ops, something went wrong!</p>
    <Button onClick={reload}>Reload</Button>
</div>
);
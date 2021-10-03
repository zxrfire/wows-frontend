import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import * as React from "react";

export default class Table1 extends React.Component{
    constructor(props) {
        super(props);
        this.state = {data: [{'user_id': '0', 'shipname': 'placeholder'}]}
    }

    render() {
        let searched = this.props.searched
        let shipstats = this.props.user_id
        let constaccstats = this.props.user_stat
        if (!searched){
            return <div> </div>
        }
        console.log(shipstats)
        return (
            <div>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Ship Name</TableCell>
                                <TableCell>Battles</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {shipstats.map((item) => (
                                <TableRow>
                                    <TableCell>{item['ship_name']}</TableCell>
                                    <TableCell>{item['battles']}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        )
    }
}

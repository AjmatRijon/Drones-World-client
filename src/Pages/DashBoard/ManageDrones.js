import React, { useEffect, useState } from "react";
// import useAuth from "../../hooks/useAuth";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";

const ManageDrones = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const url = `https://pacific-mountain-74572.herokuapp.com/drones`;
    fetch(url, {
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
   // delete order
   const handleDeleteOrder = (id) => {
    const proceed = window.confirm('Are you Sure?')
    if(proceed){
        const url = `https://pacific-mountain-74572.herokuapp.com/drones/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          alert("Delete Confirm");
        }
      });
    }
  };
  return (
    <div>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Product Name</TableCell>
              <TableCell align="center">Price</TableCell>
              <TableCell align="center">Image</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow
                key={order?.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {order.name}
                </TableCell>
                <TableCell align="center">${order.price}</TableCell>
                <TableCell align="center"> <img height="50px" width="50px" src={order.img} alt="" /> </TableCell>
                <TableCell align="center">
                  <Button variant="outlined" color="error"
                  onClick={() => handleDeleteOrder(order._id)}
                  >
                    Delete
                  </Button>{" "}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ManageDrones;

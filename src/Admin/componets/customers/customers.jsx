import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Avatar, Box, Card, CardHeader, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { getUsers } from '../../../Redux/Customers/Customer/Action';

const CustomersTable = () => {
  const dispatch = useDispatch();
  const { customers, loading, error } = useSelector((store) => store.customer); 
  const jwt = localStorage.getItem("jwt");


  useEffect(() => {
    dispatch(getUsers(customers,jwt));
  }, [jwt]);

  return (
    <Box width={"100%"}>
      <Card className="mt-2">
        <CardHeader
          title="All Customers"
          sx={{ pt: 2, alignItems: "center", "& .MuiCardHeader-action": { mt: 0.6 } }}
        />
        <TableContainer>
          <Table sx={{ minWidth: 800 }} aria-label="table in dashboard">
            <TableHead>
              <TableRow>
                <TableCell>UserId</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              { (
                customers?.map((customer) => (
                  <TableRow
                    hover
                    key={customer.id}
                    sx={{ "&:last-of-type td, &:last-of-type th": { border: 0 } }}
                  >
                    <TableCell>
                      {/* <Avatar alt={customer.name} src={customer.avatar} /> */}
                      {customer.id}
                    </TableCell>
                    <TableCell>{customer.firstName}</TableCell>
                    <TableCell>{customer.email}</TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </Box>
  );
};

export default CustomersTable;

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Chip from '@mui/material/Chip'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import Typography from '@mui/material/Typography'
import TableContainer from '@mui/material/TableContainer'
import { Avatar, CardHeader } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { getUsers } from '../../Redux/Customers/Customer/Action'

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
const CustomersTable = () => {
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const { customers, loading, error } = useSelector((store) => store.customer); 
  const jwt = localStorage.getItem("jwt");


  useEffect(() => {
    dispatch(getUsers(customers,jwt));
  }, [jwt]);




  return (
    <Card>
      <CardHeader
          title='New Customers'
          sx={{ pt: 2, alignItems: 'center', '& .MuiCardHeader-action': { mt: 0.6 } }}
          action={<Typography onClick={()=>navigate("/admin/customers")} variant='caption' sx={{color:"blue",cursor:"pointer",paddingRight:".8rem"}}>View All</Typography>}
          titleTypographyProps={{
            variant: 'h5',
            sx: { lineHeight: '1.6 !important', letterSpacing: '0.15px !important' }
          }}
        />
      <TableContainer>
        <Table sx={{ minWidth: 390 }} aria-label='table in dashboard'>
          <TableHead>
            <TableRow>
            <TableCell>UserId</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              
            </TableRow>
          </TableHead>
          <TableBody>
            {customers?.slice(0,7).map((customer) => (
              <TableRow hover  key={customer.id} sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}>

                      <TableCell>
                      {/* <Avatar alt={customer.name} src={customer.avatar} /> */}
                      {customer.id}
                    </TableCell>
                    <TableCell>{customer.firstName}</TableCell>
                    <TableCell>{customer.email}</TableCell>
              


               
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
};


export default CustomersTable

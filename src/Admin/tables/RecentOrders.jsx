import { Avatar, Box, Card, CardHeader, Chip, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'

import React, { useEffect } from 'react'
import { dressPage1 } from '../../Data/dress/page1'
import { useNavigate } from 'react-router-dom'
import {  useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getOrders } from '../../Redux/Admin/Orders/Action';

const RecentOrders = () => {
    const navigate=useNavigate();
    const { adminsOrder } = useSelector((store) => store);
    const dispatch = useDispatch();
    const jwt = localStorage.getItem("jwt");
    useEffect(() => {
      dispatch(getOrders({ jwt }));
    }, [jwt,adminsOrder.delivered, adminsOrder.shipped, adminsOrder.confirmed]);
  




  return (
    <Card>
       <CardHeader
          title='Recent Orders'
          sx={{ pt: 2, alignItems: 'center', '& .MuiCardHeader-action': { mt: 0.6 } }}
          action={<Typography onClick={()=>navigate("/admin/products")} variant='caption' sx={{color:"blue",cursor:"pointer",paddingRight:".8rem"}}>View All</Typography>}
          titleTypographyProps={{
            variant: 'h5',
            sx: { lineHeight: '1.6 !important', letterSpacing: '0.15px !important' }
          }}
        />
    <TableContainer>
      <Table sx={{ minWidth: 800 }} aria-label='table in dashboard'>
        <TableHead>
          <TableRow>
             <TableCell>Image</TableCell>
            <TableCell>Title</TableCell>
          
            <TableCell>Price</TableCell>
             <TableCell>Order Id</TableCell>
             <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {adminsOrder?.orders?.slice(0,5).map((item,index) => (
            <TableRow hover key={item.name} sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}>
             <TableCell> 
              {/* <Avatar alt={item.title} src={item.imageUrl} />*/}
              <Avatar max={4} sx={{justifyContent: 'start'}}>
      {item.orderItems.map((orderItem)=><Avatar  alt={item.title} src={orderItem.product.imageUrl} /> )}
    </Avatar> 
              </TableCell> 
             
              <TableCell sx={{ py: theme => `${theme.spacing(0.5)} !important` }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>


                <Typography
                        sx={{
                          fontWeight: 500,
                          fontSize: "0.875rem !important",
                        }}
                      >
                        {item?.orderItems.map((order) => (
                          <span className=""> {order.product.title},</span>
                        ))}
                      </Typography>
                  



                      <Typography variant="caption">
                        {item?.orderItems.map((order) => (
                          <span className="opacity-60">
                            {" "}
                            {order.product.brand},
                          </span>
                        ))}
                      </Typography>


                      
                </Box>
              </TableCell>
              
              <TableCell>{item.totalPrice}</TableCell>
              <TableCell>{index+1}</TableCell>
              {/* <TableCell><Chip sx={{color:"white"}} label="PLACED" size='small' color="success" className='text-white' /></TableCell> */}
              <TableCell className="text-white">
                    <Chip
                      sx={{
                        color: "white !important",
                        fontWeight: "bold",
                        textAlign: "center",
                      }}
                      label={item.orderStatus}
                      size="small"
                      color={
                        item.orderStatus === "PENDING" ? "info" :item.orderStatus==="DELIVERED"? "success":"secondary"
                      }
                      className="text-white"
                    />
                  </TableCell>

















                  
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </Card>
  )
}

export default RecentOrders
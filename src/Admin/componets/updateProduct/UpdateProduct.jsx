import { useState } from "react";
import { Typography } from "@mui/material";
import {
  Grid,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

//import { Fragment } from "react";
// import "./CreateProductForm.css";
import { useDispatch, useSelector } from "react-redux";
// import {
//   updateProduct,
// } from "../../../Redux/Admin/Product/Action";
import {findProductById} from '../../../Redux/Customers/Product/Action'
import { useEffect } from "react";
import { updateProduct } from "../../../Redux/Customers/Product/Action";
import { useParams } from "react-router-dom";
// import { } from "../../../Redux/Customers/Product/ActionType";
const initialSizes = [
  { name: "S", quantity: 0 },
  { name: "M", quantity: 0 },
  { name: "L", quantity: 0 },
];

// Changes Shejal

const initialCategories = {
  topLevel: ["Men", "Women", "Kids"],
  secondLevel: ["Clothing", "Accessories", "Brands"],
  thirdLevel: [
    "Tops",
    "Dresses",
    "T-Shirts",
    "Saree",
    "Lengha Choli",
    "Mens_Kurta",
    "Mens_Shirt",
    "Mens_Jeans",
  ],
};


// changes Shejal
// topLevelCategory: initialCategories,
//     secondLevelCategory: initialCategories,
//     thirdLevelCategory: initialCategories,

// instead of
// topLevelCategory: "",
//     secondLevelCategory: "",
//     thirdLevelCategory: ""


const UpdateProductForm = () => {
  const [productData, setProductData] = useState({
    id:"",
    imageUrl: "",
    brand: "",
    title: "",
    color: "",
    discountPrice: "",
    price: "",
    discountPercent: "",
    // size: initialSizes,
    size: initialSizes,
    quantity: "",
    topLevelCategory: initialCategories,
    secondLevelCategory: initialCategories,
    thirdLevelCategory: initialCategories,
    description: "",
  });
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { productId } = useParams();
  console.log("PID",productId);
  const { customersProduct } = useSelector((store) => store);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };


  const handleSizeChange = (e, index) => {
    let { name, value } = e.target;
    name==="size_quantity"?name="quantity":name=e.target.name;

    const sizes = [...productData.size];
    sizes[index][name] = value;
    setProductData((prevState) => ({
      ...prevState,
      size: sizes,
    }));
  };






  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   dispatch(updateProduct());
  //   console.log(productData);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProduct({data:productData,jwt}))
    console.log(productData);
    alert("Product is updated");
    
  };


  useEffect(() => {
    dispatch(findProductById({productId}));
  }, [productId]);

  useEffect(()=>{
    if(customersProduct.product){
        for(let key in productData){
    setProductData((prev)=>({...prev,[key]:customersProduct.product[key]}))
    console.log(customersProduct.product[key],"--------",key)
}
    }

  },[customersProduct.product])

  return (
    <div className="createProductContainer ">
      <Typography
        variant="h3"
        sx={{ textAlign: "center" }}
        className="py-10 text-center "
      >
        Update Product
      </Typography>
      <form
        onSubmit={handleSubmit}
        className="createProductContainer min-h-screen"
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Image URL"
              name="imageUrl"
              value={productData.imageUrl}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Brand"
              name="brand"
              value={productData.brand}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Title"
              name="title"
              value={productData.title}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Color"
              name="color"
              value={productData.color}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Quantity"
              name="quantity"
              value={productData.quantity}
              onChange={handleChange}
              type="number"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Price"
              name="price"
              value={productData.price}
              onChange={handleChange}
              type="number"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Discounted Price"
              name="discountPrice"
              value={productData.discountPrice}
              onChange={handleChange}
              type="number"
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Discount Percentage"
              name="discountPercent"
              value={productData.discountPercent}
              onChange={handleChange}
              type="number"
            />
          </Grid>


{/* change made by Shejal */}




          {/* <Grid item xs={6} sm={4}>
            <FormControl fullWidth>
              <InputLabel>Top Level Category</InputLabel>
              <Select
                name="topLevelCategory"
                value={productData.topLevelCategory}
                onChange={handleChange}
                label="Top Level Category"
              >
                <MenuItem value="Men">Men</MenuItem>
                <MenuItem value="Women">Women</MenuItem>
                <MenuItem value="Kids">Kids</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6} sm={4}>
            <FormControl fullWidth>
              <InputLabel>Second Level Category</InputLabel>
              <Select
                name="secondLevelCategory"
                value={productData.secondLevelCategory}
                onChange={handleChange}
                label="Second Level Category"
              >
                <MenuItem value="Clothing">Clothing</MenuItem>
                <MenuItem value="Accessories">Accessories</MenuItem>
                <MenuItem value="Brands">Brands</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6} sm={4}>
            <FormControl fullWidth>
              <InputLabel>Third Level Category</InputLabel>
              <Select
                name="thirdLevelCategory"
                value={productData.thirdLevelCategory}
                onChange={handleChange}
                label="Third Level Category"
              >
                <MenuItem value="Tops">Tops</MenuItem>
                <MenuItem value="Dresses">Dresses</MenuItem>
                <MenuItem value="T-Shirts">T-Shirts</MenuItem>
                <MenuItem value="Saree">Saree</MenuItem>
                <MenuItem value="Lengha Choli">Lengha Choli</MenuItem>
                <MenuItem value="Mens_Kurta">Mens Kurta</MenuItem>
                <MenuItem value="Mens_Shirt">Mens Shirt</MenuItem>
                <MenuItem value="Mens_Jeans">Mens Jeans</MenuItem>
              
              </Select>
            </FormControl>
          </Grid> */}



          <Grid item xs={12}>
            <TextField
              fullWidth
              id="outlined-multiline-static"
              label="Description"
              multiline
              name="description"
              rows={3}
              onChange={handleChange}
              value={productData.description}
            />
          </Grid>


          
          {/* {productData.size.map((size, index) => (
            <Grid container item spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Size Name"
                  name="name"
                  value={size.name}
                  onChange={(event) => handleSizeChange(event, index)}
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Quantity"
                  name="size_quantity"
                  type="number"
                  onChange={(event) => handleSizeChange(event, index)}
                  required
                  fullWidth
                />
              </Grid>{" "}
            </Grid>
          ))} */}

          <Grid item xs={12}>
            <Button
              variant="contained"
              sx={{ p: 1.8 }}
              className="py-20"
              size="large"
              type="submit"
            >
              Update Product
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default UpdateProductForm;

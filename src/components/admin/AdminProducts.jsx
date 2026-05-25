import {
  useState,
  useEffect,
} from "react";

import axios from "axios";

import "../../css/AdminProducts.css";

import ImageCropper
  from "./ImageCropper";

function AdminProducts() {

  /* =========================================
     STATES
  ========================================= */

  const [

  selectedGalleryImage,

  setSelectedGalleryImage,

] = useState(null);

const [selectedImage, setSelectedImage] =
  useState(null);

  const [products, setProducts] =
    useState([]);

  const [formData, setFormData] =
    useState({

      name: "",

      category: "",

      description: "",

      price: "",

    });

  /* MAIN IMAGE */

  const [image, setImage] =
    useState("");

  /* GALLERY IMAGES */

  const [galleryImages, setGalleryImages] =
    useState([]);

  /* LOADING */

  const [uploading, setUploading] =
    useState(false);

  const [addingProduct, setAddingProduct] =
    useState(false);



  /* =========================================
     FETCH PRODUCTS
  ========================================= */

  useEffect(() => {

    fetchProducts();

  }, []);

  const fetchProducts =
    async () => {

      try {

        const { data } =
          await axios.get(

            "http://localhost:5000/api/products"
          );

        setProducts(data);

      } catch (error) {

        console.log(error);

      }

  };



  /* =========================================
     HANDLE INPUT CHANGE
  ========================================= */

  const handleChange =
    (e) => {

      setFormData({

        ...formData,

        [e.target.name]:
          e.target.value,

      });

  };



  /* =========================================
     MAIN IMAGE UPLOAD
  ========================================= */

  const uploadImage =
    async (e) => {

    const file =
  e.target.files[0];

setSelectedImage(

  URL.createObjectURL(file)

);

      if (!file) return;

      const imageData =
        new FormData();

      imageData.append(
        "image",
        file
      );

      try {

        setUploading(true);

        const { data } =
          await axios.post(

            "http://localhost:5000/api/upload",

            imageData,

            {

              headers: {

                "Content-Type":
                  "multipart/form-data",

              },

            }

          );

        setImage(data.image);

      } catch (error) {

        console.log(error);

        alert(
          "Main Image Upload Failed"
        );

      } finally {

        setUploading(false);

      }

  };



  /* =========================================
     GALLERY IMAGE UPLOAD
  ========================================= */

  const uploadGalleryImages =
    async (e) => {

      const files =
        Array.from(
          e.target.files
        );

      try {

        setUploading(true);

        const uploadedImages = [];

        setSelectedGalleryImage(

  URL.createObjectURL(
    files[0]
  )

);

        for (const file of files) {

          const formData =
            new FormData();

          formData.append(
            "image",
            file
          );

          const { data } =
            await axios.post(

              "http://localhost:5000/api/upload",

              formData,

              {

                headers: {

                  "Content-Type":
                    "multipart/form-data",

                },

              }

            );

          uploadedImages.push(
            data.image
          );

        }

setGalleryImages((prev) => [

  ...prev,

  ...uploadedImages,

]);
      } catch (error) {

        console.log(error);

        alert(
          "Gallery Upload Failed"
        );

      } finally {

        setUploading(false);

      }

  };



  /* =========================================
     ADD PRODUCT
  ========================================= */

  const handleAddProduct =
    async () => {

      try {

        /* VALIDATION */

        if (!image) {

          alert(
            "Please Upload Main Image"
          );

          return;

        }

        if (!formData.price) {

          alert(
            "Please Enter Price"
          );

          return;

        }

        setAddingProduct(true);

        /* USER */

        const userInfo =
          JSON.parse(

            localStorage.getItem(
              "userInfo"
            )

          );

        /* TOKEN */

        const config = {

          headers: {

            Authorization:
              `Bearer ${userInfo.token}`,

          },

        };

        /* PRODUCT DATA */

        const productData = {

          ...formData,

          price: Number(
            formData.price
          ),

          image,

          galleryImages,

        };

        console.log(productData);

        /* API */

        await axios.post(

          "http://localhost:5000/api/products",

          productData,

          config
        );

        alert(
          "Product Added Successfully"
        );

        /* RESET */

        setFormData({

          name: "",

          category: "",

          description: "",

          price: "",

        });

        setImage("");

        setGalleryImages([]);

        /* REFRESH */

        fetchProducts();

      } catch (error) {

        console.log(error);

        alert(
          "Failed To Add Product"
        );

      } finally {

        setAddingProduct(false);

      }

  };



  return (
    <div className="admin-products">

      <h1>
        Product Management
      </h1>



      {/* =========================================
          PRODUCT FORM
      ========================================= */}

      <div className="product-form">

        {/* PRODUCT NAME */}

        <input
          type="text"
          name="name"
          placeholder="Product Name"

          value={formData.name}

          onChange={handleChange}
        />



        {/* CATEGORY */}

        <input
          type="text"
          name="category"
          placeholder="Category"

          value={formData.category}

          onChange={handleChange}
        />



        {/* DESCRIPTION */}

        <textarea
          name="description"
          placeholder="Description"

          value={formData.description}

          onChange={handleChange}
        />



        {/* PRICE */}

        <input
          type="number"
          name="price"
          placeholder="Price"

          value={formData.price}

          onChange={handleChange}
        />



        {/* MAIN IMAGE */}

        <div className="upload-box">

          <h3>
            Main Product Image
          </h3>

          <input
            type="file"

            onChange={uploadImage}
          />

        </div>



      {/* IMAGE CROPPER */}

{selectedImage && (

  <ImageCropper

    image={selectedImage}

    setCroppedImage={setImage}

  />

)}



{/* MAIN PREVIEW */}

{image && (

  <div className="preview-wrapper">

    <img
      src={image}
      alt="preview"
      className="preview-img"
    />

  </div>

)}


        {/* GALLERY */}

        <div className="upload-box">

          <h3>
            Product Gallery Images
          </h3>

          <input
            type="file"

            multiple

            onChange={
              uploadGalleryImages
            }
          />

        </div>

        {/* GALLERY CROPPER */}

{selectedGalleryImage && (

  <ImageCropper

    image={selectedGalleryImage}

    setCroppedImage={(img) =>

      setGalleryImages((prev) => [

        ...prev,

        img,

      ])

    }

  />

)}



        {/* GALLERY PREVIEW */}

        <div className="gallery-preview">

          {galleryImages.map(

            (img, index) => (

              <img
                key={index}

                src={img}

                alt="gallery"
              />

            )

          )}

        </div>



        {/* BUTTON */}

        <button
          onClick={handleAddProduct}

          disabled={
            uploading ||
            addingProduct
          }
        >

          {uploading
            ? "Uploading Images..."
            : addingProduct
            ? "Adding Product..."
            : "Add Product"}

        </button>

      </div>



      {/* =========================================
          PRODUCTS TABLE
      ========================================= */}

      <table>

        <thead>

          <tr>

            <th>Image</th>

            <th>Name</th>

            <th>Category</th>

            <th>Price</th>

          </tr>

        </thead>

        <tbody>

          {products.map((product) => (

            <tr key={product._id}>

              <td>

                <img
                  src={product.image}
                  alt={product.name}
                  className="product-table-img"
                />

              </td>

              <td>
                {product.name}
              </td>

              <td>
                {product.category}
              </td>

              <td>
                ₹{product.price}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default AdminProducts;
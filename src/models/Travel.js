const mongoose = require('../database');
const S3 = require("aws-sdk/clients/s3");
const fs = require("fs");
const path = require("path");
const { promisify } = require("util");

const s3 = new S3();

const TravelSchema = new mongoose.Schema({
  name_package: {
      type: String
     
  },
  city:{
      type: String
      
  },
  state:{
      type: String
  },   
  date_initial: {
      type: String
     
  },
  date_end: {
      type: String
      
  },
  price: {
      type: String
      
  },
  quant_min: {
      type: Number
    
  },
  quant_max: {
      type: Number
     
  },
  quant_day: {
      type: String
      
  },
  description: {
      type: String
      
  },
  file: {
      name: String,
      size: Number,
      key: String,
      url: String
  },
  createdAt: {
      type: Date,
      default: Date.now,
  },
  itinerary: [
      {
          
              title: {
                  type: String,
                 
              },
              description_itinerary: {
                  type: String,
                 
              },
              departure_time_itinerary: {
                  type: String,
                  
              },
      }
  ],
  admin_id:[{ 
      type: mongoose.Schema.Types.ObjectId, 
      ref:'Admin',
      require: true
  }]
});
/*
TravelSchema.pre("save", function () {
    if (!this.url) {
      this.url = `${process.env.APP_URL}/files/${this.key}`;
    }
  });
  
  TravelSchema.pre("remove", function () {
    if (process.env.STORAGE_TYPE === "s3") {
      return s3
        .deleteObject({
          Bucket: process.env.BUCKET_NAME,
          Key: this.key,
        })
        .promise()
        .then((response) => {
          console.log(response.status);
        })
        .catch((response) => {
          console.log(response.status);
        });
    } else {
      return promisify(fs.unlink)(
        path.resolve(__dirname, "..", "..", "tmp", "uploads", this.key)
      );
    }
  });
  */
 module.exports = mongoose.model('Travel', TravelSchema);


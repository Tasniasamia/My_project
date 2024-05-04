module.exports = {
  env: {
    product_mode: "demo",
    // product_mode: "production",
    backend_url:
      process.env.NODE_ENV === "production"
        ? " http://192.168.0.145:4400/"
        : " http://192.168.0.145:4400/",
    is_laravel_backend: 'false',
    google_map_api_key: "AIzaSyDIkOy2b--fTHoMju1muXyYXR2r0GJtutU",

  },
  images: {
    domains: [
      "appstick.s3.ap-southeast-1.amazonaws.com", 'image.shutterstock.com'],
  },
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
};

// https://car2goprobackend.appstick.com.bd/
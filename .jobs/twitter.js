const axios = require('axios');
mongoose
  .connect(
    'mongodb+srv://app:7U32UhLEwpdyOlsD@dataextraction.b64ff.mongodb.net/data?retryWrites=true&w=majority',
    { useNewUrlParser: true }
  )
  .then(() => console.log('Connected to database'))
  .catch((error) => console.error(error));

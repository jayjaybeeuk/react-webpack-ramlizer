import axios from "axios";
import _forEach from "Lodash/foreach";

class APIHelper {
  static getData(ajaxUrl) {
    return axios
      .get(ajaxUrl) // return here
      .then(response => response.data)
      .catch(error => error);
  }

  static postData(ajaxUrl, postParams) {
    const params = new URLSearchParams();
    _forEach(postParams, (value, key) => {
      params.append(key, value);
    });

    return axios
      .post(ajaxUrl, params) // return here
      .then(response => response.data)
      .catch(error => error);
  }
}

export default APIHelper;

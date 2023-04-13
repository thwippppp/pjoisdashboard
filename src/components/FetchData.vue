<script>
import Axios from "axios";

export default {
  data() {
    return {
      Completed: 0,
      Claimed: 0,
      Ongoing: 0,
    };
  },

  mounted() {
    console.log("TESTA");
    const url2 = "http://10.10.120.32:1337/api/jobOrderStatus";

    Axios({
      method: "GET",
      url: url2,
    }).then((response) => {
      console.log("qays", response.data.Completed);

      this.Completed = response.data.Completed;

      console.log("qays", response.data.Claimed);

      this.Claimed = response.data.Claimed;

      console.log("qays", response.data.Ongoing);

      this.Ongoing = response.data.Ongoing;
    });
  },
};
</script>

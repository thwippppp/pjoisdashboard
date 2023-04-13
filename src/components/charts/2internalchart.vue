<template>
  <div class="col">
    <div class="no-padding q-mb-lg flex-center">
      <h6 class="no-margin">Internal</h6>
    </div>
    <div class="flex flex-center">
      <apexchart
        type="donut"
        width="500"
        :options="chartOptions"
        :series="series"
      >
      </apexchart>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  mounted() {
    const url = "http://10.10.120.32:1337/api/pieChart/customerTypeviaStatus";

    axios({
      method: "GET",
      url: url,
    }).then((response) => {
      console.log("lloyd", response.data);
      this.series = [
        response.data.Internal.Ongoing,
        response.data.Internal.Completed,
        response.data.Internal.Claimed,
      ];
    });
  },

  name: "MyChart4",
  data() {
    return {
      series: [],
      chartOptions: {
        chart: {
          type: "donut",
          size: "70%",
        },
        labels: ["Ongoing", "Completed", "Claimed"],

        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },
    };
  },
};
</script>

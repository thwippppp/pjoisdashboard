<template>
  <div class="col">
    <div class="no-padding q-mb-lg flex-center">
      <h6 class="no-margin">External</h6>
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
        response.data.External.Ongoing,
        response.data.External.Completed,
        response.data.External.Claimed,
      ];
    });
  },

  name: "MyChart5",
  data() {
    return {
      series: [],
      chartOptions: {
        chart: {
          type: "donut",
        },
        labels: ["Ongoing", "Completed", "Claimed"],
        colors: ["#FFD700", "#FF6347", "#00BFFF"],
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

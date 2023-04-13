<template>
  <div class="col">
    <div class="no-padding flex-center">
      <h6 class="no-margin">Internal</h6>
    </div>
    <br />
    <div class="flex flex-center">
      <apexchart
        type="pie"
        width="380"
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

  name: "MyChart1",
  data() {
    return {
      series: [],
      chartOptions: {
        chart: {
          width: 380,
          type: "pie",
          align: "center",
          verticalAlign: "middle",
        },
        labels: ["Ongoing", "Completed", "Claimed"],
        fill: {
          opacity: 90,
        },
        dataLabels: {
          enabled: true,
        },
        stroke: {
          width: 1,
          colors: undefined,
        },
        yaxis: {
          show: false,
        },
        legend: {
          floating: true,
          position: "bottom",
          fontSize: "13px",
          offsetX: -35,
          offsetY: 30,
        },
      },
    };
  },
};
</script>

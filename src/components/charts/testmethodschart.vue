<template>
  <div id="chart">
    <apexchart
      type="bar"
      height="380"
      width="1550"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>

<script>
import axios from "axios";

export default {
  mounted() {
    const url = "http://10.10.120.32:1337/api/barChart/testMethod";
    axios.get(url).then((response) => {
      const data = response.data.result;
      // const categories = data.map((item) => item.data);
      const testData = data.map((item) => item.totaldata);
      this.series[0].data = testData;
      // this.chartOptions.xaxis.categories = categories;
    });
  },

  name: "MyChart6",

  data() {
    return {
      series: [
        {
          name: "Total Number",
          data: [],
        },
      ],
      chartOptions: {
        chart: {
          height: 350,
          type: "bar",
        },
        plotOptions: {
          bar: {
            borderRadius: 0,
            columnWidth: "40%",
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          width: 0,
        },

        grid: {
          row: {
            colors: ["#fff", "#f2f2f2"],
          },
        },
        xaxis: {
          labels: {
            style: {
              fontSize: "9px",
            },

            rotate: -30,
          },
          categories: [
            "E883-11",
            "E407-07",
            "E3-11",
            "B487-85 (Reapproved 2013)",
            "JIS G 0553 (2006)",
            "E-1508-98 Re-approved 2003",
          ],
        },
      },
    };
  },
};
</script>

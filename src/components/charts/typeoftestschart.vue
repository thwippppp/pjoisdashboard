<template>
  <div id="chart">
    <apexchart
      type="bar"
      height="400"
      width="1400"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>

<script>
import axios from "axios";

export default {
  mounted() {
    const url = "http://10.10.120.32:1337/api/barChart/TypeOfTest";
    axios.get(url).then((response) => {
      const data = response.data.typeOfTestResult;
      // const categories = data.map((item) => item.data);
      const testData = data.map((item) => item.totaldata);
      this.series[0].data = testData;
      // this.chartOptions.xaxis.categories = categories;
    });
  },

  name: "MyChart8",
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
          width: "100%",
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
            rotate: -25,
          },
          categories: [
            "Cast Iron",
            "Plain Carbon Steel",
            "Metallographic Grinding",
            "Hot Mounting",
            "Cutting",
            "Thickness of Coating",
            "Fractographic Evaluation",
            "Aluminum/Aluminum Alloy",
            "Conductive Sample",
            "Metal Classification/Certification",
            "Macroexamination",
            "Energy Dispersive Spectroscopy",
            "Low Alloy Steel/High Alloy Steel",
            "Cold Mounting",
          ],
        },
      },
    };
  },
};
</script>

import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

interface ChartOptions {
  selectedRisk: number,
  options: any,
  series: any,
  type: string,
  optionsExpand: any,
  seriesExpand: any,
}

export default function RiskChart({ selectedRisk, options, series, optionsExpand, seriesExpand }: ChartOptions) {
  if (selectedRisk === -1) {
    return (
      <Chart
        options={options}
        series={series}
        type="area"
      />
    );
  }

  return (
    <Chart
      options={optionsExpand}
      series={seriesExpand}
      type="area"
    />
  );
}

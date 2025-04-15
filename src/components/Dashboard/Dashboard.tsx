import Typography from '@/components/Typography';
import StatsCard from '@/components/StatsCard';
import BarChart from '@/components/Charts/BarChart';

function Dashboard() {
  return (
    <section className="flex flex-col p-10 !ml-30 w-full gap-5">
      <div>
        <Typography as="h2" className="">
          Resumo de métricas
        </Typography>
        <Typography className="">
          Bem vindo de volta, usuário! Veja um pouco do que está acontecendo no
          momento.
        </Typography>
      </div>
      <div className="grid gap-3 grid-cols-12">
        <StatsCard
          title="Leads"
          trend="up"
          value="1.2k"
          percentage="12%"
          cash="+$2.453"
          iconName="Users"
        />
        <StatsCard
          title="Conversão"
          trend="up"
          value="15%"
          percentage="2%"
          cash="+$42k"
          iconName="ArrowUpCircle"
        />
        <StatsCard
          title="Campanhas Ativas"
          trend="up"
          value="8"
          percentage="5%"
          cash="+$4.053"
          iconName="Activity"
        />
        <StatsCard
          title="Solicitações"
          trend="up"
          value="24"
          percentage="2%"
          cash="+$2.453"
          iconName="Inbox"
        />
        <StatsCard
          title="Roi Total"
          trend="up"
          value="3.5x"
          percentage="0.8%"
          cash="+$2.453"
          iconName="DollarSign"
        />
        <StatsCard
          title="Média de Custo"
          trend="down"
          value="R$ 120"
          percentage="-10%"
          cash="-$2.453"
          iconName="CreditCard"
        />
      </div>
      <BarChart />
    </section>
  );
}

export default Dashboard;

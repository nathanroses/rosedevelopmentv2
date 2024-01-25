import SectionTitle from "@/components/Common/SectionTitle";
import SingleTeam from "./SingleTeam";
import teamData from "./teamData";

const Team = () => {
  return (
    <section className="overflow-hidden py-17.5 lg:py-22.5 xl:py-27.5">
      <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0">
        <SectionTitle
          subTitle="Meet Out Team"
          title="Our Dynamic Team"
          paragraph="We are Rose Development and we are here to help you with your business. "
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 lg:gap-17.5">
          {teamData.map((team) => (
            <SingleTeam key={team.id} team={team} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;

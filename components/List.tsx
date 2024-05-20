import { Separator } from "@/components/ui/separator";

const List = ({ organization }: any) => {
  const years = Object.keys(organization.years);

  return (
    <div className="w-full h-auto flex flex-col gap-6 justify-center items-center mb-3">
      {" "}
      <Separator />
      <h3 className="font-semibold">Years</h3>
      <div className="flex flex-row gap-1">
        {years.map((year) => (
          <div key={year}>
            <button className="bg-blue-400 text-white p-1 rounded-md">
              {year}
            </button>
          </div>
        ))}
      </div>
      <Separator />
      <h3 className="font-semibold">Technologies</h3>
      <div className="flex flex-wrap gap-2 px-8">
        {organization.technologies.map(
          (
            tech:
              | boolean
              | React.ReactElement<
                  any,
                  string | React.JSXElementConstructor<any>
                >
              | Iterable<React.ReactNode>
              | Promise<React.AwaitedReactNode>
              | React.Key
              | null
              | undefined,
            index: number
          ) => (
            <div key={index}>
              <button className="border-2 text-sm border-blue-600 p-2 rounded-md">
                {tech}
              </button>
            </div>
          )
        )}
      </div>
      <Separator />
      <h3 className="font-semibold">Topics</h3>
      <div className="flex flex-wrap gap-2 px-8">
        {organization.topics.map(
          (
            topic:
              | boolean
              | React.ReactElement<
                  any,
                  string | React.JSXElementConstructor<any>
                >
              | Iterable<React.ReactNode>
              | Promise<React.AwaitedReactNode>
              | React.Key
              | null
              | undefined,
            index: number
          ) => (
            <div key={index}>
              <button className="border-2 text-sm border-blue-400 p-2 rounded-md">
                {topic}
              </button>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default List;

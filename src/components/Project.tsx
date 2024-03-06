import { IArrowUp } from "@/assets/icons";
import { Tag } from ".";
import Image from "next/image";
import { IProject } from "@/interfaces";

type Props = { data: IProject };

export const Project = ({ data }: Props) => {
  return (
    <a
      href="#"
      className="Experience-container group flex flex-col-reverse md:flex-row gap-7 mb-8 lg:mb-14 px-6 py-4 transition-all rounded-lg hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)]"
    >
      <div className="w-[120px] ">
        <Image src={data.image} alt="imgF" width={200} />
      </div>
      <div className="flex-1">
        <div className="mb-4">
          <h4 className="dark:group-hover:text-teal-300 group-hover:text-teal-300  dark:text-white font-bold  transition-all flex items-center gap-1">
            <span>{data.title}</span>
            <span
              className="rotate-45
                  transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-focus-visible:-translate-y-1 group-focus-visible:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
            >
              <IArrowUp width={16} height={16} />
            </span>
          </h4>
          {/* <h6 className="text-slate-gray font-medium">Senior Engineer</h6> */}
        </div>

        <p className="text-slate-gray mb-6 text-sm  ">{data.summary}</p>

        <div className="flex flex-wrap gap-2">
          {data.tags.map((el, i) => (
            <Tag key={el.id} text={el.text} />
          ))}
        </div>
      </div>
    </a>
  );
};

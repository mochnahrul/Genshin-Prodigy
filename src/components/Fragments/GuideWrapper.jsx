import { Fragment } from "react";

const GuideWrapper = (props) => {
  const { children, title } = props;
  return (
    <Fragment>
      <div className="mb-6 flex flex-row flex-wrap">
        <div className="w-full px-3">
          <div className="text-center md:text-start">
            <h3 className="text-lg font-medium text-emerald-200">{title}</h3>
          </div>
        </div>
      </div>
      <div className="flex flex-row flex-wrap gap-y-6">{children}</div>
    </Fragment>
  );
};

export default GuideWrapper;

import { Image, Typography } from "antd";
import React from "react";

const Donate = () => {
  return (
    <>
      <Typography.Title level={4}>Donate</Typography.Title>
      <div className="flex justify-between gap-2">
        <div>
          <Typography.Paragraph>
            Simple ways to make the world a better place. Please checkout to
            another site.
          </Typography.Paragraph>
          <Typography.Link
            href="https://resume-watsize.vercel.app/donate"
            target="_blank"
            rel="noopener"
          >
            https://resume-watsize.vercel.app/donate
          </Typography.Link>
        </div>
        <Image src="/donate.png" alt="donate" />
      </div>
    </>
  );
};

export default Donate;

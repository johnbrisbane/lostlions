
import { FC } from "react";
import { SignMessage } from '../../components/SignMessage';
import { SendTransaction } from '../../components/SendTransaction';
import { TransferUserWinnings } from '../../components/TransferUserWinnings'


export const BasicsView: FC = ({ }) => {

  return (
    <div className="hero mx-auto p-4 min-h-16 py-4">
      <div className="hero-content flex flex-col max-w-lg">
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]">
          Plinko
        </h1>
        {/* CONTENT GOES HERE */}
        <div className="p-2 text-center">
          <div className="flex items-stretch">
            <div>
            <SignMessage/>
            </div>
            <div>
            <SendTransaction />
            </div>
            <div>
              <TransferUserWinnings />
            </div>
          </div>
          {<p>&lt; your content &gt;</p>}
        </div>
      </div>
    </div>
  );
};

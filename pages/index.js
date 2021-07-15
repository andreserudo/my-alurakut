import MainGrid from "../src/components/MainGrid";
import Box from "../src/components/Box";
import {
  AlurakutMenu,
  OrkutNostalgicIconSet,
} from "../src/lib/AlurakutCommons";
import { ProfileRelationsBoxWrapper } from "../src/components/ProfileRelations";
import { useEffect, useState } from "react";
import { getFollowers } from "../src/services/user/userService";

function ProfileSidebar(propriedades) {
  console.log(propriedades);
  return (
    <Box>
      <img
        src={`https://github.com/${propriedades.githubUser}.png`}
        style={{ borderRadius: "8px" }}
      />
    </Box>
  );
}

export default function Home() {
  const username = "andreserudo";
  const [followers, setFollowers] = useState([]);
  const [followersQuantity, setFollowersQuantity] = useState(0);

  const handleAPIRequestForUserFollowes = async () => {
    const followersInfo = await getFollowers(username);
    setFollowers(followersInfo.slice(0, 6));
    setFollowersQuantity(followersInfo.length);
  };

  useEffect(() => {
    handleAPIRequestForUserFollowes();
  }, []);

  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        {/* <Box style="grid-area: profileArea;"> */}
        <div className="profileArea" style={{ gridArea: "profileArea" }}>
          <ProfileSidebar githubUser={username} />
        </div>
        <div className="welcomeArea" style={{ gridArea: "welcomeArea" }}>
          <Box>
            <h1 className="title">Bem vindo(a)</h1>

            <OrkutNostalgicIconSet />
          </Box>
        </div>
        <div
          className="profileRelationsArea"
          style={{ gridArea: "profileRelationsArea" }}
        >
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Pessoas da comunidade ({followersQuantity})
            </h2>

            <ul>
              {followers.map((follower) => {
                return (
                  <li key={follower}>
                    <a href={`/users/${follower.login}`}>
                      <img src={`https://github.com/${follower.login}.png`} />
                      <span>{follower.login}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
    </>
  );
}

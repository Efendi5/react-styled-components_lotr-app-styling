import { introduction, volumes } from "../../lib/data";
import Link from "../../components/Link";
import {
  StyledList,
  StyledListItem,
  StyledHeading,
  StyledParagraph,
} from "../../components/StylesVolumes";

export default function Volumes() {
  return (
    <>
      <StyledHeading>The Lord of the Rings</StyledHeading>
      <StyledParagraph>{introduction}</StyledParagraph>
      <StyledList role="list">
        {volumes.map((volume) => (
          <StyledListItem key={volume.slug}>
            <Link href={`/volumes/${volume.slug}`}>{volume.title} ➔</Link>
          </StyledListItem>
        ))}
      </StyledList>
    </>
  );
}

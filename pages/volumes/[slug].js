import Image from "next/image";
import { useRouter } from "next/router";
import { volumes } from "../../lib/data";
import Link from "../../components/Link";
import {
  StyledHeading,
  StyledParagraph,
  StyledList,
  StyledListItem,
  StyledDiv,
} from "../../components/StylesSlug";

export default function VolumeDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const volumeIndex = volumes.findIndex((volume) => volume.slug === slug);

  const volume = volumes[volumeIndex];
  const previousVolume = volumes[volumeIndex - 1];
  const nextVolume = volumes[volumeIndex + 1];

  if (!volume) {
    return null;
  }

  const { title, description, cover, books } = volume;

  return (
    <>
      <Link href="/volumes">← All Volumes</Link>
      <StyledHeading>{title}</StyledHeading>
      <StyledParagraph>{description}</StyledParagraph>
      <StyledList role="list">
        {books.map(({ ordinal, title }) => (
          <StyledListItem key={title}>
            {ordinal}: <strong>{title}</strong>
          </StyledListItem>
        ))}
      </StyledList>
      <Image
        src={cover}
        alt={`Cover image of ${title}`}
        width={140}
        height={230}
      />
      {previousVolume ? (
        <StyledDiv>
          <Link href={`/volumes/${previousVolume.slug}`}>
            ← Previous Volume: {previousVolume.title}
          </Link>
        </StyledDiv>
      ) : null}
      {nextVolume ? (
        <StyledDiv>
          <Link href={`/volumes/${nextVolume.slug}`}>
            Next Volume: {nextVolume.title} →
          </Link>
        </StyledDiv>
      ) : null}
    </>
  );
}

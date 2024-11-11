import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Room`.
 */
export type RoomProps = SliceComponentProps<Content.RoomSlice>;

/**
 * Component for "Room" Slices.
 */
const Room = ({ slice }: RoomProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for room (variation: {slice.variation}) Slices
    </section>
  );
};

export default Room;

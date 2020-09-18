import React from "react";
//import Aux from "../../hoc/Auxiliary/Auxiliary";
import classes from "./MovieList.css";

const movielist = props => (
  <div className={classes.MovieList}>
    <table className={classes.Table}>
      <tr>
        <td className={classes.Th}>Episode 1</td>
        <td className={classes.Th}>
          Episode Name Lorem Ipsem gymsem typsem V1 etc
        </td>
        <td className={classes.Th}>24-12-2020</td>
      </tr>
      <tr>
        <td className={classes.Th}>Episode 1</td>
        <td className={classes.Th}>
          Episode Name Lorem Ipsem gymsem typsem V1 etc
        </td>
        <td className={classes.Th}>24-12-2020</td>
      </tr>
      <tr>
        <td className={classes.Th}>Episode 1</td>
        <td className={classes.Th}>
          Episode Name Lorem Ipsem gymsem typsem V1 etc
        </td>
        <td className={classes.Th}>24-12-2020</td>
      </tr>
      <tr>
        <td className={classes.Th}>Episode 1</td>
        <td className={classes.Th}>
          Episode Name Lorem Ipsem gymsem typsem V1 etc
        </td>
        <td className={classes.Th}>24-12-2020</td>
      </tr>
    </table>
  </div>
);
export default movielist;
//   <Aux>
//     <h1>Movie List</h1>
//     <ul>
//       <li>
//         Lorem Ipsum is simply dummy text of tde printing and typesetting
//         industry.
//       </li>
//       <li>
//         Lorem Ipsum is simply dummy text of tde printing and typesetting
//         industry.
//       </li>
//       <li>
//         Lorem Ipsum is simply dummy text of tde printing and typesetting
//         industry.
//       </li>
//       <li>
//         Lorem Ipsum is simply dummy text of tde printing and typesetting
//         industry.
//       </li>
//       <li>
//         Lorem Ipsum is simply dummy text of tde printing and typesetting
//         industry.
//       </li>
//     </ul>
//   </Aux>
//);

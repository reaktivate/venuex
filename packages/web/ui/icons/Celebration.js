import React from 'react';
import { withTheme } from 'styled-components';

const Celebration = (props) => (
  <svg width={props.size} height={props.size} {...props} viewBox="0 0 63 63">
    <g fill={props.color ? props.color : props.theme.colors.primary} fillRule="nonzero">
      <path d="M27 11.6c1.18 0 2.305.467 3.12 1.28A4.415 4.415 0 0 1 31.4 16c0 1.18-.467 2.305-1.28 3.12A4.415 4.415 0 0 1 27 20.4a4.415 4.415 0 0 1-3.12-1.28A4.415 4.415 0 0 1 22.6 16c0-1.18.467-2.305 1.28-3.12A4.415 4.415 0 0 1 27 11.6zm1.026 5.426c.565-.564.583-1.485.106-2.023-.345-.276-.694-.421-1.06-.421-.45 0-.813.13-.996.359-.276.345-.421.694-.421 1.059 0 .432.121.756.391 1.026.499.499 1.482.499 1.98 0zM2.022 61.943c-.414-.415-.525-1.03-.318-1.652l14.482-36.667c.307-.822 1.15-1.228 1.956-.925 10.982 3.876 19.43 12.322 23.2 23.278.207.829-.147 1.628-.927 1.92L3.747 62.339l-.146.028c-.216.033-.281.04-.38.03a.728.728 0 0 1-.157-.031c-.408-.015-.767-.146-1.042-.422zm3.887-3.818l31.936-12.583c-3.542-8.914-10.487-15.876-19.381-19.426L5.909 58.125z" />
      <path d="M30.93 24.23c3.349-6.695 3.288-14.672-.141-21.38-.412-.719-.124-1.646.604-2.062.719-.41 1.647-.123 2.071.62 3.857 7.556 3.92 16.559.167 24.134-.214.536-.742.858-1.357.858-.268 0-.431-.054-.71-.194-.826-.413-1.14-1.387-.634-1.977zM18.141 19.32l-.1-.012c-.792-.206-1.241-1.079-1.128-1.997.89-3.474.14-7.32-1.987-10.143-.532-.665-.402-1.717.28-2.222.65-.564 1.688-.425 2.186.301a15.258 15.258 0 0 1 2.52 12.933c-.102.742-.714 1.22-1.465 1.22a.727.727 0 0 1-.284-.062c-.032-.01-.055-.017-.022-.017zM62.219 31.563c-.21.508-.794.837-1.355.837-.209 0-.485-.08-.71-.19-6.64-3.339-14.688-3.398-21.398-.135-.72.3-1.612 0-2.034-.724-.314-.712-.002-1.593.718-1.993 7.52-3.732 16.586-3.67 24.132.148.797.39 1.043 1.289.647 2.057zM58.003 47.777c-.3.392-.803.623-1.272.623-.32 0-.634-.102-.965-.32a11.436 11.436 0 0 0-10.125-2.036c-.829.303-1.617-.158-1.944-1.01-.323-.84.194-1.715 1.066-1.928a15.135 15.135 0 0 1 13 2.55c.756.533.859 1.523.24 2.121zM56.902 6.733c.562 0 1.174.419 1.388.956.2.503.12 1.099-.217 1.653l-1.902 2.346.79 2.814c.214.536.033 1.171-.401 1.606a1.487 1.487 0 0 1-1.597.326l-2.699-1.022-2.488 1.686a1.655 1.655 0 0 1-.926.302c-.215 0-.5-.085-.753-.214a1.66 1.66 0 0 1-.818-1.469l.218-2.918-2.259-1.752c-.502-.402-.715-.937-.613-1.552.096-.58.532-1.016 1.146-1.26l2.852-.805 1.02-2.773c.2-.6.625-.947 1.318-1.057.581 0 1.145.254 1.427.727l1.602 2.406h2.912zm-3.628 3.615l.305-.388h-.507c-.564 0-.998-.256-1.353-.732l-.263-.41-.215.608c-.245.49-.575.82-1.033.911l-.602.168.423.302c.406.305.628.807.628 1.361l-.03.495.406-.29c.436-.327.974-.412 1.468-.214l.605.214-.18-.65c-.205-.537-.088-1.098.348-1.375zM43 25.4c-1.105 0-2.22-.464-3.12-1.284a4.429 4.429 0 0 1-1.28-3.125c0-1.183.467-2.31 1.287-3.132 1.756-1.68 4.55-1.68 6.233.007a4.429 4.429 0 0 1 1.28 3.125c0 1.183-.467 2.31-1.28 3.125A4.352 4.352 0 0 1 43 25.4zm-.939-3.364c.498.554 1.396.554 1.935.017.277-.346.422-.695.422-1.062 0-.433-.122-.759-.392-1.03-.254-.254-.637-.392-1.026-.392-.428 0-.75.12-1.018.385-.493.558-.455 1.487.08 2.082z" />
      <path d="M47 30.6c1.18 0 2.305.467 3.12 1.28A4.415 4.415 0 0 1 51.4 35c0 1.249-.438 2.353-1.295 3.132-.908.826-1.953 1.268-3.105 1.268a4.415 4.415 0 0 1-3.12-1.28A4.415 4.415 0 0 1 42.6 35c0-1.18.467-2.305 1.28-3.12A4.415 4.415 0 0 1 47 30.6zm1.49 4.4c0-.432-.12-.756-.391-1.026-.27-.27-.595-.392-1.026-.392-.432 0-.756.121-.997.359-.276.345-.421.694-.421 1.059 0 .432.121.756.391 1.026.494.494 1.463.499 1.965.015.326-.411.48-.723.48-1.041zM2.117 22.251c-.561 0-1.172-.422-1.386-.96-.23-.578-.17-1.273.216-1.659L2.85 17.27l-.714-2.75c-.213-.537-.033-1.174.4-1.61a1.48 1.48 0 0 1 1.597-.328l2.692 1.027 2.456-1.673a1.45 1.45 0 0 1 1.707-.11c.5.303.739.811.738 1.474l-.218 2.93 2.255 1.689c.501.404.714.94.612 1.557-.096.581-.53 1.02-1.144 1.264l-2.847.81-1.019 2.788c-.196.595-.68.948-1.394 1.062h-.156c-.509 0-1.019-.286-1.353-.738l-1.522-2.41H2.117zm3.56-3.653l-.322.413h.508c.503 0 .927.267 1.274.736l.288.45.265-.649c.245-.493.574-.825 1.031-.916l.605-.17-.426-.307c-.405-.306-.627-.81-.626-1.365l.029-.5-.403.29c-.435.33-.974.416-1.468.216l-.603-.215.18.658c.19.504.038 1.067-.332 1.359zM39.352 56.485c-.544-.332-.834-.892-.732-1.514.099-.603.495-1.12 1.023-1.335l2.852-1.041.718-2.769c.105-.643.548-1.092 1.184-1.2.582-.099 1.105.087 1.548.541l1.807 2.278 3.017-.371c.604 0 1.126.307 1.434.83.3.508.245 1.126-.092 1.695l-1.668 2.434 1.096 2.677c.196.6.096 1.135-.3 1.638-.389.494-.905.652-1.58.536l-2.917-.742-2.304 1.901c-.23.233-.626.357-.986.357-.294 0-.445-.02-.618-.109a1.522 1.522 0 0 1-.95-1.389l-.072-2.872-2.46-1.545zm5.894-2.243c-.103.523-.42.872-.943 1.085l-.022.008-.624.212.365.24c.453.23.764.767.763 1.283l.031.532.453-.394c.331-.337.853-.455 1.405-.342l.647.183-.21-.573c-.12-.49-.065-1.051.217-1.433l.304-.432-.442.025a1.401 1.401 0 0 1-1.408-.543l-.366-.474-.17.623z" />
    </g>
  </svg>
);

Celebration.defaultProps = {
  size: 24
};

export default withTheme(Celebration);

import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
const UserProfile = (props) => {
  return (
    <>
      <main className="contentColumn-2hrIYH contentColumnDefault-1VQkGM">
        <div className="profileCustomizationSection-1-Issy">
          <div className="sectionTitle-2vauyC">
            <h1 className="colorStandard-2KCXvj size14-e6ZScH h1-1qdNzo title-3sZWYQ defaultColor-1_ajX0 defaultMarginh1-peT3GC">
              User profile
            </h1>
          </div>
          <div className="children-rWhLdy">
            <div className="baseLayout-NX_bpH">
              <div>
                <div className="customizationSection-2f2fhI">
                  <h5 className="colorStandard-2KCXvj size14-e6ZScH h5-18_1nd title-3sZWYQ defaultMarginh5-2mL-bP">
                    Avatar
                  </h5>
                  <div className="buttonsContainer-36m3gd">
                    <button
                      type="button"
                      className="button-38aScr lookFilled-1Gx00P colorBrand-3pXr91 sizeSmall-2cSMqn grow-q77ONN"
                    >
                      <div className="contents-18-Yxp">Change avatar</div>
                    </button>
                    <button
                      type="button"
                      className="removeButton-Mm3jN3 button-38aScr lookLink-9FtZy- lowSaturationUnderline-3svVxy colorPrimary-3b3xI6 sizeSmall-2cSMqn grow-q77ONN"
                    >
                      <div className="contents-18-Yxp">Remove avatar</div>
                    </button>
                  </div>
                </div>
                <div className="customizationSection-2f2fhI">
                  <h5 className="colorStandard-2KCXvj size14-e6ZScH h5-18_1nd title-3sZWYQ defaultMarginh5-2mL-bP">
                    Profile Colour
                  </h5>
                  <div
                    className="buttonsContainer-3Ljuzc"
                    aria-label="Profile Colour"
                    role="radiogroup"
                    aria-orientation="horizontal"
                    aria-disabled="false"
                  >
                    <div className="colorSwatch-1CKj-B">
                      <div
                        className
                        role="radio"
                        tabIndex={-1}
                        aria-label="Use default profile colour, calculated from your avatar. #1b1b1b"
                        aria-checked="false"
                      >
                        <div
                          className="swatch-2XEFyZ"
                          style={{ backgroundColor: "rgb(27, 27, 27)" }}
                        />
                        <div
                          className="colorHeaderSecondary-3Sp3Ft size12-3cLvbJ swatchDescription-1A4xHV"
                          aria-hidden="true"
                        >
                          Default
                        </div>
                      </div>
                    </div>
                    <div className="colorSwatch-1CKj-B">
                      <div
                        className
                        role="radio"
                        tabIndex={0}
                        aria-label="Use a custom profile colour. Selected: #000000"
                        aria-checked="true"
                      >
                        <div
                          className="customSwatch-19WGLJ swatch-2XEFyZ"
                          style={{
                            backgroundColor: "rgb(0, 0, 0)",
                            borderColor: "rgb(0, 0, 0)",
                          }}
                        >
                          <svg
                            aria-hidden="false"
                            width={32}
                            height={24}
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="hsl(0, calc(var(--saturation-factor, 1) * 0%), 100%)"
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M8.99991 16.17L4.82991 12L3.40991 13.41L8.99991 19L20.9999 7.00003L19.5899 5.59003L8.99991 16.17Z"
                            />
                          </svg>
                        </div>
                        <div
                          className="colorHeaderSecondary-3Sp3Ft size12-3cLvbJ swatchDescription-1A4xHV"
                          aria-hidden="true"
                        >
                          Custom
                        </div>
                      </div>
                      <div
                        className="dropperIconButton-3aSprY"
                        aria-controls="popout_807"
                        aria-expanded="false"
                        aria-label="Select custom colour"
                        role="button"
                        tabIndex={0}
                      >
                        <svg
                          className="dropperIcon-QGeseU"
                          width={14}
                          height={14}
                          viewBox="0 0 16 16"
                        >
                          <g fill="none">
                            <path d="M-4-4h24v24H-4z" />
                            <path
                              fill="hsl(0, calc(var(--saturation-factor, 1) * 0%), 100%)"
                              d="M14.994 1.006C13.858-.257 11.904-.3 10.72.89L8.637 2.975l-.696-.697-1.387 1.388 5.557 5.557 1.387-1.388-.697-.697 1.964-1.964c1.13-1.13 1.3-2.985.23-4.168zm-13.25 10.25c-.225.224-.408.48-.55.764L.02 14.37l1.39 1.39 2.35-1.174c.283-.14.54-.33.765-.55l4.808-4.808-2.776-2.776-4.813 4.803z"
                            />
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="customizationSection-2f2fhI">
                  <h5 className="colorStandard-2KCXvj size14-e6ZScH h5-18_1nd title-3sZWYQ defaultMarginh5-2mL-bP">
                    Profile Banner
                    <svg
                      aria-label="Exclusive to Nitro"
                      className="nitroWheel-qdpYIu"
                      aria-hidden="false"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M2.98966977,9.35789159 C2.98966977,9.77582472 2.63442946,10.1240466 2.20807287,10.1240466 L1.78171628,10.1240466 C1.35535969,10.1240466 0.999948837,9.77582472 0.999948837,9.35789159 C0.999948837,8.93995846 1.35535969,8.59173658 1.78171628,8.59173658 L2.20807287,8.59173658 C2.63442946,8.59173658 2.98966977,8.93995846 2.98966977,9.35789159 Z M22.2467643,9.14892503 C24.0942527,12.9800344 22.3888264,17.5772989 18.3384388,19.3882867 C14.4302837,21.1297305 9.74036124,19.457998 7.9638186,15.6268886 C7.60857829,14.8607335 7.3954,14.0248673 7.32428372,13.189001 L5.76091938,13.189001 C5.33456279,13.189001 4.97932248,12.840612 4.97932248,12.4226788 C4.97932248,12.0047457 5.33456279,11.6565238 5.76091938,11.6565238 L8.03493488,11.6565238 C8.46129147,11.6565238 8.81653178,11.3083019 8.81653178,10.8903688 C8.81653178,10.4724357 8.46129147,10.1240466 8.03493488,10.1240466 L4.41090388,10.1240466 C3.98454729,10.1240466 3.62913643,9.77582472 3.62913643,9.35789159 C3.62913643,8.93995846 3.98454729,8.59173658 4.41090388,8.59173658 L9.45606667,8.59173658 C9.88242326,8.59173658 10.2376636,8.24334752 10.2376636,7.82541439 C10.2376636,7.40748126 9.88242326,7.05925937 9.45606667,7.05925937 L7.3954,7.05925937 C6.75586512,7.05925937 6.18727597,6.57161499 6.18727597,5.87517123 C6.18727597,5.24827153 6.68474884,4.69091591 7.3954,4.69091591 L15.4250589,4.69091591 C18.267493,4.8303384 20.9676946,6.43235968 22.2467643,9.14892503 Z M13.2662961,8.38056332 C11.0193969,9.3919615 10.0341721,11.9973566 11.065955,14.1998642 C12.097738,16.4023718 14.755645,17.3681317 17.0025442,16.3567335 C19.249614,15.3453354 20.2346682,12.7399402 19.2028853,10.5374326 C18.1711023,8.33492503 15.5131953,7.36916515 13.2662961,8.38056332 Z M16.8462589,9.84548582 L18.2673907,12.2138293 C18.338507,12.3530846 18.338507,12.4227958 18.2673907,12.5620512 L16.8462589,14.9303946 C16.7751426,15.0696499 16.6330806,15.0696499 16.5619643,15.0696499 L13.7906465,15.0696499 C13.6485845,15.0696499 13.5774682,14.9999387 13.5065225,14.9303946 L12.0852202,12.5620512 C12.0142744,12.4227958 12.0142744,12.3530846 12.0852202,12.2138293 L13.5065225,9.84548582 C13.5774682,9.7062305 13.7197008,9.7062305 13.7906465,9.7062305 L16.5619643,9.7062305 C16.7041969,9.63651925 16.7751426,9.7062305 16.8462589,9.84548582 Z"
                      />
                    </svg>
                  </h5>
                  <div className="colorStandard-2KCXvj size14-e6ZScH description-3_Ncsb formText-3fs7AJ sectionDescription-f3FtNc modeDefault-3a2Ph1">
                    We recommend an image of at least 600x240. You can upload a
                    PNG, JPG or an animated GIF under 10 MB.
                  </div>
                  <button
                    type="button"
                    className="shinyButton-3uFlM- button-38aScr lookFilled-1Gx00P colorGreen-29iAKY sizeMedium-1AC_Sl grow-q77ONN"
                  >
                    <div className="contents-18-Yxp nitroUpsellButtonInner-1fdLoR">
                      <svg
                        className="nitroUpsellButtonWheel-1KmuD_"
                        aria-hidden="false"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M2.98966977,9.35789159 C2.98966977,9.77582472 2.63442946,10.1240466 2.20807287,10.1240466 L1.78171628,10.1240466 C1.35535969,10.1240466 0.999948837,9.77582472 0.999948837,9.35789159 C0.999948837,8.93995846 1.35535969,8.59173658 1.78171628,8.59173658 L2.20807287,8.59173658 C2.63442946,8.59173658 2.98966977,8.93995846 2.98966977,9.35789159 Z M22.2467643,9.14892503 C24.0942527,12.9800344 22.3888264,17.5772989 18.3384388,19.3882867 C14.4302837,21.1297305 9.74036124,19.457998 7.9638186,15.6268886 C7.60857829,14.8607335 7.3954,14.0248673 7.32428372,13.189001 L5.76091938,13.189001 C5.33456279,13.189001 4.97932248,12.840612 4.97932248,12.4226788 C4.97932248,12.0047457 5.33456279,11.6565238 5.76091938,11.6565238 L8.03493488,11.6565238 C8.46129147,11.6565238 8.81653178,11.3083019 8.81653178,10.8903688 C8.81653178,10.4724357 8.46129147,10.1240466 8.03493488,10.1240466 L4.41090388,10.1240466 C3.98454729,10.1240466 3.62913643,9.77582472 3.62913643,9.35789159 C3.62913643,8.93995846 3.98454729,8.59173658 4.41090388,8.59173658 L9.45606667,8.59173658 C9.88242326,8.59173658 10.2376636,8.24334752 10.2376636,7.82541439 C10.2376636,7.40748126 9.88242326,7.05925937 9.45606667,7.05925937 L7.3954,7.05925937 C6.75586512,7.05925937 6.18727597,6.57161499 6.18727597,5.87517123 C6.18727597,5.24827153 6.68474884,4.69091591 7.3954,4.69091591 L15.4250589,4.69091591 C18.267493,4.8303384 20.9676946,6.43235968 22.2467643,9.14892503 Z M13.2662961,8.38056332 C11.0193969,9.3919615 10.0341721,11.9973566 11.065955,14.1998642 C12.097738,16.4023718 14.755645,17.3681317 17.0025442,16.3567335 C19.249614,15.3453354 20.2346682,12.7399402 19.2028853,10.5374326 C18.1711023,8.33492503 15.5131953,7.36916515 13.2662961,8.38056332 Z M16.8462589,9.84548582 L18.2673907,12.2138293 C18.338507,12.3530846 18.338507,12.4227958 18.2673907,12.5620512 L16.8462589,14.9303946 C16.7751426,15.0696499 16.6330806,15.0696499 16.5619643,15.0696499 L13.7906465,15.0696499 C13.6485845,15.0696499 13.5774682,14.9999387 13.5065225,14.9303946 L12.0852202,12.5620512 C12.0142744,12.4227958 12.0142744,12.3530846 12.0852202,12.2138293 L13.5065225,9.84548582 C13.5774682,9.7062305 13.7197008,9.7062305 13.7906465,9.7062305 L16.5619643,9.7062305 C16.7041969,9.63651925 16.7751426,9.7062305 16.8462589,9.84548582 Z"
                        />
                      </svg>
                      Unlock with Nitro
                      <div className="shineContainerDefault-2bbFgu shineContainer-1HHuZ1 buttonShine-1CSUM8">
                        <div
                          className="flex-1xMQg5 flex-1O1GKY horizontal-1ae9ci horizontal-2EEEnY flex-1O1GKY directionRow-3v3tfG justifyCenter-3D2jYp alignCenter-1dQNNs noWrap-3jynv6 shine-2f1uEU"
                          style={{ flex: "1 1 auto" }}
                        >
                          <div className="shineInner-fWUhvE" />
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
                <div className="customizationSection-2f2fhI">
                  <h5 className="colorStandard-2KCXvj size14-e6ZScH h5-18_1nd title-3sZWYQ defaultMarginh5-2mL-bP">
                    About Me
                  </h5>
                  <div className="colorStandard-2KCXvj size14-e6ZScH description-3_Ncsb formText-3fs7AJ sectionDescription-f3FtNc modeDefault-3a2Ph1">
                    You can use markdown and links if you’d like.
                  </div>
                  <div className="inputWrapper-31_8H8">
                    <div className="inputMaxLength-1vRluy">
                      <textarea
                        type="text"
                        className="inputDefault-_djjkz input-cIJ7To textArea-1Lj-Ns scrollbarDefault-3COgCQ scrollbar-3dvm_9"
                        placeholder="Tell the world a little bit about yourself"
                        maxLength={190}
                        rows={6}
                        style={{ paddingRight: "31.69px" }}
                        defaultValue={
                          "Deathzone Network Dev [70+ Users]\nJavascript Dev. Verified Discord Bot Dev.\nDiscord bot hosting: DM me\nHost code: https://paste.grits.tech\nGithub: https://github.grits.tech"
                        }
                      />
                      <div className="maxLength-39QFBo">18</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="customizationSection-2f2fhI preview-1nip2n">
                <h5 className="colorStandard-2KCXvj size14-e6ZScH h5-18_1nd title-3sZWYQ defaultMarginh5-2mL-bP">
                  Preview
                </h5>
                <div className="profileBannerPreview-gaX5MP">
                  <div
                    className="bannerNormal-3u-o59 banner-3vVQWW"
                    style={{ backgroundColor: "rgb(0, 0, 0)" }}
                  >
                    <div
                      className="bannerNitroUpsell-1aRyq0"
                      role="button"
                      tabIndex={0}
                    >
                      <h3 className="bannerNitroUpsellText-Qv5DoD fontDisplay-1dagSA base-1x0h_U size12-3cLvbJ uppercase-3VWUQ9">
                        Unlock banner
                      </h3>
                    </div>
                  </div>
                  <div className="avatarUploader-3XDtmn avatarUploaderNormal-1kvMcd avatarUploader-3h7Odh">
                    <div
                      className="avatarUploaderInner-3UNxY3 avatarUploaderInner-mAGe3e"
                      style={{
                        backgroundImage:
                          'url("https://cdn.discordapp.com/avatars/852668805082775593/8f4b8d808198d1bde48dd567336b0abf.webp?size=56")',
                      }}
                    >
                      <span aria-hidden="true" />
                      <div
                        className="avatarUploaderHint-3SN212"
                        aria-hidden="true"
                      >
                        Change avatar
                      </div>
                      <div
                        className="fileInput-23-d-3"
                        aria-label="Change
avatar"
                        role="button"
                        tabIndex={0}
                      />
                      <div className="avatarUploaderIcon-3UIzEQ" />
                    </div>
                  </div>
                  <div className="headerTop-3vNv-a headerTopWithCustomStatus-1DHAjX">
                    <div
                      className="profileBadges-ohc0Vu container-q03LZO"
                      aria-label="User badges"
                      role="group"
                    />
                    <div className="headerText-1vVs-U">
                      <div className="headerTagNoNickname-3qrd77 headerTag-3GFl76 nameTag-m8r81H">
                        <span className="username-2b1r56 headerTagUsernameNoNickname-2-Y5Ct headerTagUsernameBase-1NqrY5">
                          Grits
                        </span>
                        <span className="headerTagDiscriminatorNoNickname-D-AYUN discrimBase-24vY8o">
                          #8111
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="popoutInfo-1A9dyK">
                    <div className="customStatus-oN4ZZY">
                      <span className="customStatusText-1vtUsN">
                        Need me ? Ping me @Grits
                      </span>
                    </div>
                    <div className="divider-ewBQKj" />
                    <div className="aboutMeSection-1Fw5Ia">
                      <h3 className="aboutMeTitle-1IYtPE fontDisplay-1dagSA base-1x0h_U size12-3cLvbJ muted-3-7c5L uppercase-3VWUQ9">
                        About me
                      </h3>
                      <div className="aboutMeBody-3GuvKk markup-2BOw-j clamped-IwJfxR">
                        Deathzone Network Dev [70+ Users] Javascript Dev.
                        Verified Discord Bot Dev. Discord bot hosting: DM me
                        Host code:{" "}
                        <a
                          className="anchor-3Z-8Bb anchorUnderlineOnHover-2ESHQB"
                          title="https://paste.grits.tech/"
                          href="https://paste.grits.tech/"
                          rel="noreferrer noopener"
                          target="_blank"
                          role="button"
                          tabIndex={0}
                        >
                          https://paste.grits.tech/
                        </a>
                        Github:{" "}
                        <a
                          className="anchor-3Z-8Bb anchorUnderlineOnHover-2ESHQB"
                          title="https://github.grits.tech/"
                          href="https://github.grits.tech/"
                          rel="noreferrer noopener"
                          target="_blank"
                          role="button"
                          tabIndex={0}
                        >
                          https://github.grits.tech/
                        </a>
                      </div>
                    </div>
                    <div aria-hidden="true">
                      <h3 className="fakeActivityTitle-ka26mT fontDisplay-1dagSA base-1x0h_U size12-3cLvbJ muted-3-7c5L uppercase-3VWUQ9">
                        Customising my profile
                      </h3>
                      <div className="fakeActivityLayout-AhfPCa">
                        <div className="fakeActivityIcon-2uT519">
                          <img
                            className="fakeActivityPencil-3yYmN6"
                            src="/assets/3be860e37bf5f2df40ad15d2de5cee0e.png"
                            style={{ transform: "none" }}
                          />
                        </div>
                        <div className="fakeActivityContent-gUkdvL">
                          <div className="colorStandard-2KCXvj size14-e6ZScH strong-1TazCs">
                            User profile
                          </div>
                          <div className="colorStandard-2KCXvj size14-e6ZScH">
                            <span className="fakeActivityTimeValues-2zDaxa">
                              01:06
                            </span>{" "}
                            elapsed
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

UserProfile.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(UserProfile);

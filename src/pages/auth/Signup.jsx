import React /*, { useState } */ from "react";
import { Link } from "react-router-dom";

import CustomBox, { GradientBorder } from "../../components/CustomBox";
import CustomButton from "../../components/CustomButton";
import CustomTypography from "../../components/CustomTypography";
import CustomInput from "../../components/CustomInput";

import radialGradient from "../../theme/functions/radialGradient";
import palette from "../../theme/base/colors";
import borders from "../../theme/base/borders";
import CoverLayout from "./CoverLayout";

import bgSignUp from "../../assets/signUpImage.png";

const SignIn = () => {
  return (
    <CoverLayout
      image={bgSignUp}
      premotto="INSPIRED FROM"
      motto="THE VISION UI DASHBOARD"
      cardContent
    >
      <GradientBorder
        borderRadius={borders.borderRadius.form}
        minWidth="100%"
        maxWidth="100%"
      >
        <CustomBox
          component="form"
          role="form"
          borderRadius="inherit"
          p="45px"
          sx={({ palette: { secondary } }) => ({
            backgroundColor: secondary.focus,
          })}
        >
          <CustomTypography
            color="white"
            fontWeight="bold"
            textAlign="center"
            mb="24px"
            sx={({ typography: { size } }) => ({
              fontSize: size.lg,
            })}
          >
            Register with
          </CustomTypography>
          <CustomBox mb={2}>
            <CustomBox mb={1} ml={0.5}>
              <CustomTypography
                component="label"
                variant="button"
                color="white"
                fontWeight="medium"
              >
                Name
              </CustomTypography>
            </CustomBox>
            <GradientBorder
              minWidth="100%"
              borderRadius={borders.borderRadius.lg}
              padding="1px"
              backgroundImage={radialGradient(
                palette.gradients.borderLight.main,
                palette.gradients.borderLight.state,
                palette.gradients.borderLight.angle
              )}
            >
              <CustomInput
                placeholder="Your full name..."
                sx={({ typography: { size } }) => ({
                  fontSize: size.sm,
                })}
              />
            </GradientBorder>
          </CustomBox>
          <CustomBox mb={2}>
            <CustomBox mb={1} ml={0.5}>
              <CustomTypography
                component="label"
                variant="button"
                color="white"
                fontWeight="medium"
              >
                Email
              </CustomTypography>
            </CustomBox>
            <GradientBorder
              minWidth="100%"
              borderRadius={borders.borderRadius.lg}
              padding="1px"
              backgroundImage={radialGradient(
                palette.gradients.borderLight.main,
                palette.gradients.borderLight.state,
                palette.gradients.borderLight.angle
              )}
            >
              <CustomInput
                type="email"
                placeholder="Your email..."
                sx={({ typography: { size } }) => ({
                  fontSize: size.sm,
                })}
              />
            </GradientBorder>
          </CustomBox>
          <CustomBox mb={2}>
            <CustomBox mb={1} ml={0.5}>
              <CustomTypography
                component="label"
                variant="button"
                color="white"
                fontWeight="medium"
              >
                Password
              </CustomTypography>
            </CustomBox>
            <GradientBorder
              minWidth="100%"
              borderRadius={borders.borderRadius.lg}
              padding="1px"
              backgroundImage={radialGradient(
                palette.gradients.borderLight.main,
                palette.gradients.borderLight.state,
                palette.gradients.borderLight.angle
              )}
            >
              <CustomInput
                type="password"
                placeholder="Your password..."
                sx={({ typography: { size } }) => ({
                  fontSize: size.sm,
                })}
              />
            </GradientBorder>
          </CustomBox>
          <CustomBox mt={4} mb={1}>
            <CustomButton color="info" fullWidth>
              SIGN UP
            </CustomButton>
          </CustomBox>
          <CustomBox mt={3} textAlign="center">
            <CustomTypography
              variant="button"
              color="text"
              fontWeight="regular"
            >
              Already have an account?{" "}
              <CustomTypography
                component={Link}
                to="/login"
                variant="button"
                color="white"
                fontWeight="medium"
              >
                Sign in
              </CustomTypography>
            </CustomTypography>
          </CustomBox>
        </CustomBox>
      </GradientBorder>
    </CoverLayout>
  );
};

export default SignIn;
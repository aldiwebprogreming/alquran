import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function SkeletonHome() {
  return (
    <div>
      <div className="row">
        <div className="col-sm-12 mb-5 mt-3">
          <SkeletonTheme baseColor="#ffff" highlightColor="#dbd0dd">
            <Skeleton height={150} />
          </SkeletonTheme>
        </div>
        <div className="col-sm-4">
          <SkeletonTheme baseColor="#ffff" highlightColor="#dbd0dd">
            <Skeleton height={50} />
            <Skeleton height={150} />
          </SkeletonTheme>
        </div>

        <div className="col-sm-4">
          <SkeletonTheme baseColor="#ffff" highlightColor="#dbd0dd">
            <Skeleton height={50} />
            <Skeleton height={150} />
          </SkeletonTheme>
        </div>
        <div className="col-sm-4">
          <SkeletonTheme baseColor="#ffff" highlightColor="#dbd0dd">
            <Skeleton height={50} />
            <Skeleton height={150} />
          </SkeletonTheme>
        </div>
        <div className="col-sm-4">
          <SkeletonTheme baseColor="#ffff" highlightColor="#dbd0dd">
            <Skeleton height={50} />
            <Skeleton height={150} />
          </SkeletonTheme>
        </div>
        <div className="col-sm-4">
          <SkeletonTheme baseColor="#ffff" highlightColor="#dbd0dd">
            <Skeleton height={50} />
            <Skeleton height={150} />
          </SkeletonTheme>
        </div>
        <div className="col-sm-4">
          <SkeletonTheme baseColor="#ffff" highlightColor="#dbd0dd">
            <Skeleton height={50} />
            <Skeleton height={150} />
          </SkeletonTheme>
        </div>
      </div>
    </div>
  );
}

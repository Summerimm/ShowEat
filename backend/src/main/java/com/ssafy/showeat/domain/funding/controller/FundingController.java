package com.ssafy.showeat.domain.funding.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.ssafy.showeat.domain.funding.dto.request.CreateFundingRequestDto;
import com.ssafy.showeat.domain.funding.service.FundingService;
import com.ssafy.showeat.global.response.ResponseResult;

import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping(value = "/api/funding")
public class FundingController {

	private final FundingService fundingService;

	@ApiOperation(value = "펀딩 생성" , notes = "업주가 펀딩을 생성합니다.")
	@ApiResponses(value = {
		@ApiResponse(code = 200, message = "펀딩 생성"),
		@ApiResponse(code = 400, message = "펀딩 실패"),
	})
	@PostMapping
	public ResponseResult createFunding(@Valid @RequestBody CreateFundingRequestDto createFundingRequestDto
	){
		fundingService.createFunding(createFundingRequestDto);
		return ResponseResult.successResponse;
	}
}
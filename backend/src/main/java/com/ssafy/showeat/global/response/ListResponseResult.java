package com.ssafy.showeat.global.response;

import java.util.List;

public class ListResponseResult<T> extends ResponseResult {

	private List<T> data;

	public ListResponseResult(List<T> data) {
		super(successResponse.statusCode, successResponse.messages, successResponse.developerMessage,
			successResponse.timestamp);
		this.data = data;
	}
}
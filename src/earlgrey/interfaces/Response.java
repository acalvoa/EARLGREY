package earlgrey.interfaces;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;

import org.json.JSONArray;
import org.json.JSONObject;

public interface Response {
	public void file(String content, String name, byte[] raw);
	public void file(String content, String name, String raw);
	public void file(String content, String name, FileInputStream raw);
	public void xml(JSONObject obj);
	public void xml(JSONArray obj);
	public void json(JSONObject obj);
	public void json(JSONArray obj);
	public void ok(String message);
	public void noContent();
	public void accepted();
	public void send(String text, int code);
	public void serverError(JSONArray obj);
	public void serverError(String text);
	public void setHeader(String key, String value);
	public void notFound();
	public void notFound(String text);
	public void notAllowed();
	public void notAllowed(String text);
	public void imTeaPot();
	public void notImplemented();
	public void notImplemented(String text);
	public void badRequest();
	public void badRequest(String text);
	public void conflict();
	public void conflict(String text);
	public void paramsRequired();
	public void paramsRequired(String text);
	public void forbidden();
	public void forbidden(String text);
	public void customError(JSONArray obj, int code);
	public void customResponse(JSONArray obj, int code);
	public void customResponse(String text, int code);
	public void created();
	public void unauthorized();
}

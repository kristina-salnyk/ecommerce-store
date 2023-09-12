#import "AppDelegate.h"

#import <React/RCTBundleURLProvider.h>

#import <GoogleMaps/GoogleMaps.h>

#import <AppCenterReactNativeShared/AppCenterReactNativeShared.h>
#import <AppCenterReactNative.h>
#import <AppCenterReactNativeAnalytics.h>
#import <AppCenterReactNativeCrashes.h>

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{

  NSString* googleAPIKey = [[NSProcessInfo processInfo] environment][@"REACT_APP_GOOGLE_API_KEY"];
  [GMSServices provideAPIKey: googleAPIKey];

  NSString* appCenterKey = [[NSProcessInfo processInfo] environment][@"REACT_APP_APP_CENTER_KEY"];
  [AppCenterReactNativeShared setStartAutomatically:YES];
  [AppCenterReactNativeShared setAppSecret: appCenterKey];
  [AppCenterReactNative register];
  [AppCenterReactNativeAnalytics registerWithInitiallyEnabled:true];
  [AppCenterReactNativeCrashes registerWithAutomaticProcessing];

  self.moduleName = @"ReactNativeCourseHW";
  // You can add your custom initial props in the dictionary below.
  // They will be passed down to the ViewController used by React Native.
  self.initialProps = @{};

  return [super application:application didFinishLaunchingWithOptions:launchOptions];
}

- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index"];
#else
  return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif
}

@end
